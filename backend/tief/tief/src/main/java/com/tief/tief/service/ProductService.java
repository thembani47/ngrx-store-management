package com.tief.tief.service;

import com.tief.tief.entity.Product;
import com.tief.tief.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> all() {
        return this.productRepository.findAll();
    }

    public Optional<Product> getOne(final Long id) {
        return this.productRepository.findById(id);
    }

    public void delete(final Long id) {
        this.productRepository.deleteById(id);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }
}
