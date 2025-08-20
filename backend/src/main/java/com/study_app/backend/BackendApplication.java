package com.study_app.backend;

// import javax.sql.DataSource;

// import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.jdbc.core.JdbcTemplate;

// import lombok.extern.java.Log;

@SpringBootApplication
// @Log
// 
public class BackendApplication {

	// private DataSource dataSource;
	
	// public BackendApplication(DataSource dataSource) {
	// 	this.dataSource = dataSource;
	// }
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// public void run(final String... args) {
	// 	log.info("Datasource: " + dataSource.toString());
	// 	final JdbcTemplate restTemplate = new JdbcTemplate(dataSource);
	// 	restTemplate.execute("Select 1");
	// }
}
