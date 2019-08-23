package hacker.framework.common.request;

import hacker.framework.common.annotation.ResponseCode;
import hacker.framework.common.request.ResultInfo;

/**
 * 返回结果封装结果
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:54
 */
public class ResultInfoUtil {

	/**
	 * 提供给部分不需要出參的接口
	 *
	 * @return
	 */
	public static ResultInfo success() {
		return success(ResponseCode.SUCCESS);
	}

	/**
	 * 返回成功的结果
	 *
	 * @param data
	 * @return
	 */
	public static ResultInfo success(Object data) {
		return success(ResponseCode.SUCCESS, data);
	}


	public static ResultInfo error(String status, String message) {
		ResultInfo result = new ResultInfo();
		result.setStatus(status);
		result.setMessage(message);
		result.setData(null);
		return result;
	}


	/**
	 * 返回成功的结果
	 *
	 * @param object
	 * @return
	 */
	public static ResultInfo success(ResponseCode message, Object object) {
		ResultInfo resultInfo = new ResultInfo();
		resultInfo.setStatus(message.getStatus());
		resultInfo.setMessage(message.getMessage());
		resultInfo.setData(object);
		return resultInfo;
	}


	public static ResultInfo error() {

		return error(ResponseCode.ERROR);
	}

	public static ResultInfo error(Object data) {
		return error(ResponseCode.ERROR, data);
	}
	public static ResultInfo error(ResponseCode message, Object object) {
		ResultInfo resultInfo = new ResultInfo();
		resultInfo.setStatus(message.getStatus());
		resultInfo.setMessage(message.getMessage());
		resultInfo.setData(object);
		return resultInfo;
	}

}