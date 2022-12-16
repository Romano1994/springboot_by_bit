package user.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping(value = "user")
public class UserController2 {
	
	@GetMapping(value = "uploadForm")
	public String uploadForm() {
		return "user/uploadForm";
	}
	
//	@PostMapping(value = "upload")
//	@ResponseBody
//	public void upload(@RequestParam MultipartFile img) {
	//	가상 폴더
//		String filePath = "/Users/mac/Desktop/spring/workspace/chapter06_SpringWebMaven/src/main/webapp/WEB-INF/storage";
//		String fileName = img.getOriginalFilename();
//		
//		File file = new File(filePath, fileName);
//		try {
////			FileCopyUtils.copy(img.getInputStream(), new FileOutputStream(file));
//			img.transferTo(file);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
	
//	
//	@PostMapping(value = "upload")
//	@ResponseBody
//	public String upload(@RequestParam MultipartFile img, HttpSession httpSession) {
//		//실제 폴더
//		String filePath = httpSession.getServletContext().getRealPath("/WEB-INF/storage");
//		System.out.println(filePath);
//		String fileName = img.getOriginalFilename();
//		
//		File file = new File(filePath, fileName);
//		try {
//			//FileCopyUtils.copy(img.getInputStream(), new FileOutputStream(file));
//			img.transferTo(file);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		
//		return "<img src='../storage/"+fileName+"' width='300px'>";
//	}
	//img가 두개 이상일 경우 배열로 받아온다
//	@PostMapping(value = "upload")
//	@ResponseBody
//	public void upload(@RequestParam MultipartFile[] img, HttpSession httpSession) {
//		//실제 폴더
//		String filePath = httpSession.getServletContext().getRealPath("/WEB-INF/storage");
//		System.out.println(filePath);
//		String fileName; 
//		
//		for(int i=0; i<img.length; i++) {
//			if(img[i] != null) {
//				fileName = img[i].getOriginalFilename();
//				File file = new File(filePath, fileName);
//				try {
//					//FileCopyUtils.copy(img.getInputStream(), new FileOutputStream(file));
//					img[i].transferTo(file);
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//			}
//		}
	//한번에 여러개 파일 선택 
	@PostMapping(value = "upload")
	@ResponseBody
	public void upload(@RequestParam("img[]") List< MultipartFile>list, HttpSession httpSession) {
		//실제 폴더
		String filePath = httpSession.getServletContext().getRealPath("/WEB-INF/storage");
		System.out.println(filePath);
		String fileName; 
		
		for(MultipartFile multipartFile : list) {
			if(multipartFile != null) {
				fileName = multipartFile.getOriginalFilename();
				File file = new File(filePath, fileName);
				try {
					//FileCopyUtils.copy(img.getInputStream(), new FileOutputStream(file));
					multipartFile.transferTo(file);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	@PostMapping(value = "upload2" ,produces = "text/html; charset=UTF-8")
	@ResponseBody
	public String upload(@RequestParam MultipartFile img, HttpSession httpSession) {
		String filePath = httpSession.getServletContext().getRealPath("/storage");
		System.out.println(filePath);
		String fileName = img.getOriginalFilename();
		
		File file = new File(filePath, fileName);
		try {
			//FileCopyUtils.copy(img.getInputStream(), new FileOutputStream(file));
			img.transferTo(file);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return "<img src='../storage/"+fileName+"' width='300px'>";
	}
}
