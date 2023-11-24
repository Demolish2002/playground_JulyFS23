package com.example.playground.service;

import com.example.playground.domain.Form;
import com.example.playground.dto.FormData;
import com.example.playground.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class FormService {
    private FormRepository formRepository;
    @Autowired
    public FormService(FormRepository formRepository) {
        this.formRepository = formRepository;
    }

    public void saveData(FormData data) {
        Form form=new Form();
        form.setName(data.getName());
        form.setNumber(data.getNumber());
        formRepository.save(form);
    }
}
