package com.microserevices.profile.app.commons.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;


public class CommonServiceImpl<E, R extends CrudRepository<E, Long>> implements ICommonService<E> {

	@Autowired
	protected R profileRepository;
	
	@Override
	@Transactional(readOnly = true)
	public Iterable<E> findAll() {
		return profileRepository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<E> findById(Long id) {
		return profileRepository.findById(id);
	}

	@Override
	@Transactional
	public E save(E entity) {
		return profileRepository.save(entity);
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		profileRepository.deleteById(id);
	}

}
