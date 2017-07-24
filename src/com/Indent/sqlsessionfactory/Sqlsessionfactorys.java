package com.Indent.sqlsessionfactory;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Sqlsessionfactorys {

	private static SqlSession sqlSession;
	
	static{
		
		ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
		SqlSessionFactory sqlSessionFactory=(SqlSessionFactory) context.getBean("sqlSessionFactoryBeanName");
		sqlSession=sqlSessionFactory.openSession();
	}
	public static SqlSession getSqlSession() {
		return sqlSession;
	}
	public void close(){
		sqlSession.close();
	}
}
