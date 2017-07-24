package com.Indent.until;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Component;
@Component
public class Translate {
	// 用于返回已加密的字符串
	public String getMD5(String str) throws UnsupportedEncodingException {
		String password = null;
		MessageDigest md;
		try {
			// 固定加密算法
			md = MessageDigest.getInstance("MD5");
			// 获取加密后的数组
			byte[] b = md.digest(str.getBytes("utf-8"));
			// 进行BASE64编码
			sun.misc.BASE64Encoder base64Encoder = new sun.misc.BASE64Encoder();
			// 将加密后的数组进行base64编码，转换成对应的字符串
			password = base64Encoder.encode(b);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return password;
	}

	// 获取UUID
	public String getUUID() {
		// 生成随机的UUID
		UUID uuid = UUID.randomUUID();
		// 转换成字符串
		String string = uuid.toString();
		// 去除横杠
		string = string.replaceAll("-", "");
		return string;
	}

}
