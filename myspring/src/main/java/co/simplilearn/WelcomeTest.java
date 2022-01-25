package co.simplilearn;

import org.springframework.beans.BeansException;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class WelcomeTest {

	public static void main(String[] args) {
		try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("beans.xml")) {
			Welcome welcome =context.getBean(Welcome.class);
			System.out.println(welcome.getMessage());
		} catch (BeansException e) {
			e.printStackTrace();
		}

	}

}
