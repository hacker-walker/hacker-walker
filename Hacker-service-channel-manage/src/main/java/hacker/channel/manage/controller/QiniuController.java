package hacker.channel.manage.controller;

import hacker.channel.manage.service.QiniuService;
import hacker.framework.common.request.ResultInfo;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;


/**
 * 七牛云
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/10 9:54
 */
@RestController
@CrossOrigin(methods = { RequestMethod.GET, RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE }, origins = "*")
public class QiniuController {
	
	@Autowired
	private QiniuService qiniuService;

	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	@ResponseBody
	@ApiOperation(value = "图片上传操作")
	public ResultInfo uploadImage(@RequestParam("file") MultipartFile file, HttpServletRequest request) {

		//文件上传到七牛云

		ResultInfo res = new ResultInfo();

		if(file.isEmpty()) {
			res.setMessage("文件不存在");
			return res;
		}
		try {
			String url=qiniuService.saveImage(file);
			res.setStatus("0");
			res.setMessage("文件上传成功");
			res.setData(url);
			return res;
		} catch (Exception e) {
			e.printStackTrace();
			res.setMessage("文件上传失败");
			return res;
		}
	}
}