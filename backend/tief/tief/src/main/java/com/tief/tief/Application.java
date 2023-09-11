package com.tief.tief;

import com.tief.tief.entity.Product;
import com.tief.tief.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public CommandLineRunner run(ProductRepository productRepository) {
		return (args) -> {
			insertFourProducts(productRepository);
		};
	}

	private void insertFourProducts(ProductRepository productRepository) {
		productRepository.save(new Product(1L,"Rooster",
				"Catch it if you can!",
				299.99,
				"assets/img/rooster.jpg"));
		productRepository.save(new Product(2L,"White Chicken",
				"Very Lazy!",
				100.00,
				"assets/img/white-chicken.png"));
		productRepository.save(new Product(3L,"Egg Laying",
				"Mother NATURE!",
				349.99,
				"assets/img/egg-laying.jpg"));
		productRepository.save(new Product(4L,"Ram",
				"...",
				999.99,
				"assets/img/goat/ram.jpg"));
		productRepository.save(new Product(5L,"Buck",
				"...",
				1500.00,
				"assets/img/goat/Buck-4.jpg"));
		productRepository.save(new Product(6L,"Ram",
				"...",
				1100.00,
				"assets/img/goat/Malabari.jpg"));

	}
}
