package com.example.filedemo;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.multipart.MultipartFile;

@RestController

public class RequestController {

    public static final String UPLOAD_DIR = "/Users/callicoder/uploads/";

    @PostMapping(path="/uploader",consumes = "multipart/form-data")
    public ResponseEntity<Object> uploader(@RequestParam("fileName") String fileName, @RequestParam("file") MultipartFile file) {
    	
    	File convertFile = new File(UPLOAD_DIR + file.getOriginalFilename());
    	
    	
    	long bytes = file.getSize();
    	long byteVal = bytes / 1000;
    	
    	if(byteVal > 100) {
    		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    	}else {
            try {
    			convertFile.createNewFile();
    		     FileOutputStream fout = new FileOutputStream(convertFile);
    		        fout.write(file.getBytes());
    		        fout.close();
    		} catch (IOException e) { 
    			e.printStackTrace();
    		}
       
            return ResponseEntity.status(HttpStatus.OK).build();
    	}

    }

    @GetMapping(path="/downloader")
    public ResponseEntity<Object> downloader(@RequestParam String fileName) {

    	String filename = UPLOAD_DIR+fileName;
        File file = new File(filename);
        InputStreamResource resource = null;
		try {
			resource = new InputStreamResource(new FileInputStream(file));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        HttpHeaders headers = new HttpHeaders();
        
        headers.add("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getName()));
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        
        ResponseEntity<Object> 
        responseEntity = ResponseEntity.ok().headers(headers).contentLength(
           file.length()).contentType(MediaType.parseMediaType("application/txt")).body(resource);
        
        return responseEntity;
 

    }
    
    
    @GetMapping("/hello")  
    //read the provided form data  http://localhost:7071/hello?name=test&pass=test
    public String display(@RequestParam("name") String name,@RequestParam("pass") String pass)  
    {  
        if(pass.equals("admin"))  
        {  
            String msg="Hello "+ name;    
            return msg;  
        }  
        else  
        {  
            String msg="Sorry "+ name+". You entered an incorrect password";    
            return msg;  
        }     
    }  
    

}