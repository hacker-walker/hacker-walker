/**
 * mPicker 组件
 *
 * *** options ***
 *
 * @param {Str}                                 display    显示的方式，默认是显示在底部    'bottom'/'modal'
 * @param {Boolean}                             shadow     点击遮罩隐藏组件 - 默认为false;若为false，则禁止点击遮罩隐藏组件
 * @param {Number}                              level      显示的层级，默认：1
 * @param {Number}                              rows       picker显示的行数，默认：4
 * @param {Boolean}                             Linkage    选择联动 - 若为false，则不联动
 * @param {Array}                               dataJson   渲染picker的json - 有规定的格式，可查看json文件。不联动默认遍历获取第一个json
 * @param {Number}                              height     每一行的高度
 * @param {Boolean}                             idDefault  匹配默认值 - 若为false，则不匹配
 * @param {Str}                                 splitStr   设置分割value的符号，与默认值和显示在input里的值有关
 * @param {Element selector}                    header     picker头部html
 *@param {function}                             confirm: function() {}
 *@param {function}                             cancel: function() {}
 *
 * *** 关于json格式 ***
 *jsonChange.js是针对campaign里的json做的格式转换
 *
 * *** 关于value值 ***
 *
 *$('.select-value').data('value1')：第一级的value值
 *$('.select-value').data('value2')：第二级的value值
 *
 *
 * *** methods ***
 *
 *  show                详情请查阅源码部分
 *  hide                详情请查阅源码部分
 *  updateData          详情请查阅源码部分
 *
 */


function __dealCssEvent(eventNameArr, callback) {
    var events = eventNameArr,
        i, dom = this; // jshint ignore:line

    function fireCallBack(e) {
        /*jshint validthis:true */
        if (e.target !== this) return;
        callback.call(this, e);
        for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
        }
    }

    if (callback) {
        for (i = 0; i < events.length; i++) {
            dom.on(events[i], fireCallBack);
        }
    }
}

//动画结束事件兼容
$.fn.animationEnd = function (callback) {
    __dealCssEvent.call(this, ['webkitAnimationEnd', 'animationend'], callback);
    return this;
};
$.fn.transitionEnd = function (callback) {
    __dealCssEvent.call(this, ['webkitTransitionEnd', 'transitionend'], callback);
    return this;
};
$(function () {
    var mPickerDefaults = {
        display: 'bottom',
        shadow: false,
        level: 1,
        rows: 4,
        Linkage: false,
        dataJson: '',
        height: 36,
        idDefault: false,
        splitStr: ' ',
        jsonName: 'name',
        jsonChild: 'child',
        jsonValue: 'value',
        header: '<div class="mPicker-header"></div>',
        footer: '<div class="mPicker-footer"><a href="javascript:;" class="mPicker-confirm">确定</a><a href="javascript:;" class="mPicker-cancel">取消</a></div>',
        confirm: function () {
        },
        cancel: function () {
        }
    };

    var moveStartLock;

    var ulWidth = ['100%', '50%'];

    var $body = $('body');

    var $mask = $('<div class="mPicker-mask hide"></div>');

    var $mPicker = $('<div class="mPicker hide"></div>');

    var lock, timeTouchend;
    /**
     * 添加mPicker容器
     */
    if (!$('.mPicker').length) {
        $body.append($mPicker);
        $mPicker.append($mask);
    }
    /**
     * 阻止默认滚动
     */
    $body.on('touchmove', function (event) {
        if (lock) {
            // event.preventDefault();
            event.stopPropagation();
        }
    });
    /**
     * 禁止滚动－－防止滚动选择时页面滚动
     */
    $body.on({
        touchstart: function (event) {
            // event.preventDefault();
            lock = 1;
        },
        touchmove: function (event) {
            // event.preventDefault();
            //兼容部分手机有时候没有触发touchend
            clearTimeout(timeTouchend);
            timeTouchend = setTimeout(function () {
                lock = 0;
            }, 100);
        },
        touchend: function (event) {
            // event.preventDefault();
            lock = 0;
        }
    }, '.mPicker-main');

    function MPicker(ele, options) {
        if (!ele.length) {
            return false;
        }
        this.container = ele;
        this.mpicker = $('.mPicker');
        this.mask = this.mpicker.find('.mPicker-mask');
        this.options = $.extend({}, mPickerDefaults, options);
        this.init();
        this.event();
        this.container.data('mPicker', this);

    }


    MPicker.prototype = {
        //初始化MPicker
        init: function (ele, options) {

            /**
             * 根据行数计算居中的位置
             */
            this.middleRowIndex = parseInt(this.options.rows / 2.5);
            //展示方式
            this.disy = this.options.display === 'bottom' ? 'mPicker-bottom down' : 'mPicker-modal';

            this.container.attr('readonly', true);
        },
        //初始化mpicker,根据json渲染html结构,添加遮罩，边框等
        render: function () {
            /**
             *  初始化mpicker,根据json渲染html结构
             *  添加遮罩，边框等
             */
            var listStr;
            var jsonData = [];
            var mainStr;
            var _this = this;
            /**
             * 添加 mPicker-main元素
             */
            jsonData.push(_this.options.dataJson);
            /**
             * 获取二级的第一个选项的data.child
             */
            if (_this.options.level >= 2) {
                var childStr = _this.options.dataJson;
                for (var level = 2; level <= _this.options.level; level++) {
                    childStr = getChildJson.call(_this, childStr[0]);
                    jsonData.push(childStr);
                }
            }
            listStr = concatHtmlList.call(_this, jsonData);
            mainStr = '<div class="mPicker-main ' + _this.disy + '" data-pickerId="' + _this.pickerId + '">' + _this.options.header + '<div class="mPicker-content">' + listStr + '</div><div class="mPicker-shadow"></div>' + _this.options.footer + '</div>';
            _this.mpicker.append(mainStr);
            /**
             * 设置变量
             */
            _this.mpickerMain = _this.mpicker.find('.mPicker-main');
            //元素集合
            var $content = _this.mpickerMain.find('.mPicker-content');
            var $list = _this.mpickerMain.find('.mPicker-list');
            var $listUl = $list.find('ul');
            //var $itemOne=$listUl.eq(0);
            //var $itemTwo=_this.options.level === 2?$listUl.eq(1):false;
            //设置多列宽度
            _this.options.level > 1 ? $list.width((100 / _this.options.level).toFixed(2) + '%') : false;

            //添加选中的边框
            $list.append('<div class="mPicker-active-box"></div>');
            $list.find('.mPicker-active-box').height(_this.options.height);
            /**
             * 设置选中的边框位置
             */
            var activeBoxMarginTop = _this.options.rows % 2 === 0 ? -_this.options.height - 2 + 'px' : -_this.options.height * 0.5 - 2 + 'px';

            $content.find('.mPicker-active-box').css({
                'margin-top': activeBoxMarginTop
            });
            /**
             * 设置内容高度
             */
            var containHeight = _this.options.height * _this.options.rows;
            $content.height(containHeight);
            $list.height(containHeight);
            // $list.find('ul').css({
            //     'min-height': containHeight + 'px'
            // });

        },
        showPicker: function () {
            var _this = this;
            //_this.mpicker.data('object', _this);
            //元素集合
            //var $content=this.mpickerMain.find('.mPicker-content');

            //var $listUl=$list.find('ul');
            // var $itemOne=$listUl.eq(0);
            // var $itemTwo=this.options.level === 2?$listUl.eq(1):false;
            _this.render();
            var $list = _this.mpicker.find('.mPicker-list');
            _this.container.focus();
            _this.container.blur();
            _this.mpicker.removeClass('hide');
            _this.mask.removeClass('hide');

            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                _this.mpickerMain.removeClass('down');
            }, 10);
            /**
             * 显示默认值(判断点击确定选择后不再获取默认值)
             */
            if (!_this.noFirst && _this.options.idDefault) {
                matchDefaultData.call(_this);
            }
            /**
             * 获取input的data-id显示选中的元素
             */
            var id = [];
            setTransitionY(_this.container, 0);
            $list.each(function (index, ele) {
                var dataVal = _this.container.data('id' + (index + 1)) ? _this.container.data('id' + (index + 1)) : 0;
                id.push(dataVal);
            });
            //获得选中的元素
            setItemMultiple.call(_this, id);
        },
        hidePicker: function (callback) {
            var _this = this;

            _this.mask.addClass('hide');
            console.info(22, _this.mask.hasClass('hide'))
            console.info(22, _this.mask)
            if (_this.options.display === 'bottom') {
                _this.mpicker.find('.mPicker-main').addClass('down').transitionEnd(function () {
                    _this.mpicker.addClass('hide');
                    _this.mpicker.find('.mPicker-main').remove();
                    if (typeof (callback) === 'function') {
                        var ids = [];
                        var values = [];
                        var name = _this.container.val();
                        for (var level = 1; level <= _this.options.level; level++) {
                            ids.push(_this.container.data('id' + level));
                            values.push(_this.container.data('value' + level));
                        }
                        ids = ids.join(_this.options.splitStr);
                        values = values.join(_this.options.splitStr);
                        callback.call(_this, {values: values, ids: ids, name: name});
                    }
                });
                return false;
            }

            _this.mpicker.addClass('hide');
            callback.call(_this);
            _this.mpicker.find('.mPicker-main').remove();
        },
        updateData: function (data) {
            var _this = this;
            if (!data.length) {
                return;
            }
            _this.noFirst = false;
            for (var i = 0; i < _this.options.level; i++) {
                _this.container.data('id' + (i + 1), 0);
                _this.container.data('value' + (i + 1), '');
            }
            _this.options.dataJson = data;
            _this.container.val('');
            // _this.mpicker.find('.mPicker-main').remove();
        },
        confirm: function () {
            console.info('confirm')
            var _this = this;
            var str = '';
            var $list = _this.mpicker.find('.mPicker-main').find('.mPicker-list');
            var $listUl = $list.find('ul');
            _this.noFirst = true;
            $.each($listUl, function (index, ele) {
                var $active = $(ele).find('.active');
                var splitStr = index === 0 ? '' : _this.options.splitStr;
                if ($active.length > 0) {
                    index = index + 1;
                    _this.container.data('value' + index, $active.data('value'));
                    _this.container.data('id' + index, $active.data('id'));
                    str += splitStr + $active.text();
                }
            });
            _this.container.val(str);
            _this.hidePicker(_this.options.confirm);

        },
        cancel: function () {
            console.info('cancel')
            var _this = this;
            _this.hidePicker(_this.options.cancel);
        },
        /**
         *  事件
         *  取消，确定，点击遮罩，列表滑动事件
         */
        event: function () {
            /**
             * 点击打开选择
             */
            var _this = this;
            this.container.off('touchstart.container click.container').on('touchstart.container click.container', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var $this = $(this);
                $('.mPicker').data('object', $this.data('mPicker'));
                _this.showPicker();
            });
            //点击确定
            this.mpicker.off('touchstart.confirm click.confirm').on('touchstart.confirm click.confirm', '.mPicker-confirm', function (e) {
                e.preventDefault();
                var _this = $('.mPicker').data('object');
                _this.confirm();
            });

            //点击取消
            this.mpicker.off('touchstart.cancel click.cancel').on('touchstart.cancel click.cancel', '.mPicker-cancel', function (e) {
                e.preventDefault();
                var _this = $('.mPicker').data('object');
                _this.cancel();
            });

            //点击遮罩取消
            this.mpicker.off('touchstart.mask click.mask').on('touchstart.mask click.mask', '.mPicker-mask', function (e) {
                e.preventDefault();
                var _this = $('.mPicker').data('object');
                if (_this.options.shadow) {
                    _this.cancel();
                }
            });

            //遍历下拉列表
            var startY;
            var curY;
            var moveY;


            this.mpicker.off('touchstart.list mousedown.list').on('touchstart.list mousedown.list', '.mPicker-list', function (event) {
                fnTouches(event);

                var $this = $(this).find('ul');

                var tranY = getTranslateY($this);

                startY = getTouches(event).y - tranY;

                changeTime(0, $this);

                moveStartLock = true;
            });

            this.mpicker.off('touchmove.list mousemove.list').on('touchmove.list mousemove.list', '.mPicker-list', function (event) {
                event.preventDefault();
                if (!moveStartLock) {
                    return false;
                }
                var _this = $('.mPicker').data('object');

                fnTouches(event);

                var translate;

                var $this = $(this).find('ul');

                var listHeight = $this.height();

                var itemHeight = _this.options.height * _this.options.rows;

                var transMaxY = itemHeight - listHeight - parseInt(_this.options.rows / 2) * _this.options.height;

                var transMinY = _this.middleRowIndex * _this.options.height;

                curY = getTouches(event).y;

                moveY = curY - startY;

                translate = Math.round(moveY);
                //过了
                translate = translate > transMinY ? transMinY : translate;
                translate = translate < transMaxY ? transMaxY : translate;
                // console.info(_this.options.rows)
                setTransitionY($this, translate);
                //兼容部分手机有时候没有触发touchend
                clearTimeout(_this.timeTouchend);
                _this.timeTouchend = setTimeout(function () {
                    touchEndFn.call(_this, $this);
                }, 100);
            });

            this.mpicker.off('touchend.list mouseup.list').on('touchend.list mouseup.list', '.mPicker-list', function (event) {
                event.preventDefault();
                var _this = $('.mPicker').data('object');
                var $this = $(this).find('ul');
                touchEndFn.call(_this, $this);

            });
        }
    }

    function getTouches(event) {
        if (event.touches !== undefined) {
            return {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            };
        }

        if (event.touches === undefined) {
            if (event.pageX !== undefined) {
                return {
                    x: event.pageX,
                    y: event.pageY
                };
            }
            if (event.pageX === undefined) {
                return {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        }
    }


    /**
     *  滑动结束执行函数
     *  ele:对应的list==>ul
     *  如果是联动，则更新相应的list html
     */
    function touchEndFn(ele) {
        clearTimeout(this.timeTouchend);
        var result = setActiveItem.call(this, ele);
        var resultId = result.target.data('id');
        var $item = this.mpicker.find('.mPicker-list ul');
        var itemIndex = $item.index(ele);
        var len = $item.length;
        // this.lock=0;
        //点第一个联动&&不是最后一个，更新html

        if (this.options.Linkage && itemIndex < (len - 1)) {
            var childJson = this.options.dataJson[getActiveId($item, 0)];
            var str;
            for (var i = 2; i <= len; i++) {
                var data = getChildJson.call(this, childJson);
                if (i > itemIndex + 1) {
                    str = concatHtmlItem.call(this, data);
                    $item.eq(i - 1).html(str);
                    setActiveItem.call(this, $item.eq(i - 1), 0);
                    childJson = data[0];
                } else {
                    childJson = data[getActiveId($item, i - 1)];
                }

            }
        }
        //回调函数
        // callbackFnName[itemIndex].call(ele, result);
        changeTime(400, ele);

        moveStartLock = false;
    }

    /**
     *  获取id
     */
    function getActiveId($item, index) {
        return $item.eq(index).find('li.active').data('id')
    }

    /**
     *  第一次打开匹配默认值
     */
    function matchDefaultData() {
        var _this = this;
        var inputVal = _this.container.val().split(_this.options.splitStr);
        var defaultId = [];
        var defaultValue = [];
        var dataLevel2;
        var hasLevel2;
        //遍历获取id
        var nameEach = function (data, index) {
            $.each(data, function (key, val) {
                if (val[_this.options.jsonName] == inputVal[index]) {
                    defaultId[index] = key;
                    defaultValue[index] = val[_this.options.jsonValue];
                    _this.container.data('value' + (index + 1), defaultValue[index]);
                    _this.container.data('id' + (index + 1), defaultId[index]);
                    return false;
                }
            });
        };
        if (typeof (inputVal) !== 'object' || !inputVal.length || !_this.mpicker.find('.mPicker-main')) {
            return;
        }

        //将name值默认匹配成id，一旦匹配就跳出循环，多个匹配取第一个
        //匹配一级
        nameEach(_this.options.dataJson, 0);

        //联动时
        var childJson = _this.options.dataJson;
        if (_this.options.Linkage) {
            for (var i = 2; i <= _this.options.level; i++) {
                if (defaultId[i - 2]) {
                    childJson = getChildJson.call(_this, childJson[defaultId[i - 2]]);
                    nameEach(childJson, i - 1);
                }
            }
            return;
        }
        //非联动
        for (var i = 2; i <= _this.options.level; i++) {
            nameEach(childJson[i - 1], i - 1);
        }

    }

    /**
     *  滑动结束，设置transtion值，返回当前选中的li index和元素
     *  obj:滑动的元素
     *  val:可有可没有。可传入data-id或不传
     */
    function setActiveItem(obj, val) {
        var result;
        var y = Math.round((getTranslateY(obj) / this.options.height));
        //得到选中的index
        var index = typeof (val) === 'number' ? obj.find('li').index(obj.find('li[data-id="' + val + '"]')) : this.middleRowIndex - y;

        var y2 = -this.options.height * (index - this.middleRowIndex);
        setTransitionY(obj, y2);
        //添加选中样式
        obj.find('li').eq(index).addClass('active').siblings('li').removeClass('active');

        result = {
            target: obj.find('li').eq(index),
            index: index
        };
        return result;
    }

    /**
     *  传入数组，设置多级html
     *  index:数组
     */
    function setItemMultiple(index) {
        var _this = this;
        var $item = _this.mpicker.find('.mPicker-list ul');
        var childJson = _this.options.dataJson[index[0]];
        setActiveItem.call(_this, $item.eq(0), index[0]);
        //联动
        if (_this.options.Linkage) {
            for (var i = 1; i < index.length; i++) {
                var _index = index[i] || 0;
                childJson = reRenderList.call(_this, $item, i, _index, childJson);
            }
            return;
        }
        //不联动
        for (var i = 1; i < index.length; i++) {
            var _index = index[i] || 0;
            setActiveItem.call(_this, $item.eq(i), _index);
        }
    }

    //重新渲染
    function reRenderList($item, i, _index, childJson) {
        var _this = this;
        var data = getChildJson.call(_this, childJson);
        var str = concatHtmlItem.call(_this, data);
        $item.eq(i).html(str);
        setActiveItem.call(_this, $item.eq(i), _index);
        return data[_index];

    }

    /**
     *  传入json,判断返回json,child
     *  兼容不存在child报错的情况
     */
    function getChildJson(data) {
        if (!data) {
            return [];
        }
        var child = this.options.jsonChild;
        var result = ({}).hasOwnProperty.call(data, child) ? data[child] : [];
        return result;
    }

    /**
     *  传入json拼接html，只有li级别
     */
    function concatHtmlItem(data) {
        var str = '';
        var _this = this;
        $.each(data, function (index, val) {
            var name = val[_this.options.jsonName];
            var value = val[_this.options.jsonValue] || name;
            str += '<li data-value="' + value + '" data-id="' + index + '">' + name + '</li>';
        });
        return str;
    }

    /**
     *  传入li html 拼接ul
     */
    function concatHtmlList(data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            var itemStr = concatHtmlItem.call(this, data[i]);
            html += '<div class="mPicker-list"><ul>' + itemStr + '</ul></div>';
        }
        return html;
    }

    /**
     *  设置运动时间
     */
    function changeTime(times, obj) {
        obj.css({
            '-webkit-transition-duration': times + 'ms',
            'transition-duration': times + 'ms'
        });
    }

    /**
     *  touches兼容
     */
    function fnTouches(e) {
        if (!e.touches) {
            e.touches = e.originalEvent.touches;
        }
    }

    /**
     *  设置translateY
     */
    function setTransitionY(obj, y) {
        obj.css({
            "-webkit-transform": 'translateY(' + y + 'px)',
            transform: 'translateY(' + y + 'px)'
        });
    }

    /**
     *  获取translateY
     */
    function getTranslateY(obj) {
        var transZRegex = /\.*translateY\((.*)px\)/i;
        var result;
        if (obj[0].style.WebkitTransform) {
            result = parseInt(transZRegex.exec(obj[0].style.WebkitTransform)[1]);
        } else if (obj[0].style.transform) {
            result = parseInt(transZRegex.exec(obj[0].style.transforms)[1]);
        }
        return result;
    }

    $.fn.mPicker = function (options) {
        return this.each(function () {
            new MPicker($(this), options);
        });
    };

}());