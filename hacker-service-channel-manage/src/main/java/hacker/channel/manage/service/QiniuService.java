package hacker.channel.manage.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * 七牛云
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/10 9:44
 */
public interface QiniuService {

	String saveImage(MultipartFile file) throws IOException;

}
