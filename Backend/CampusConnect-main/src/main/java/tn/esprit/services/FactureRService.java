package tn.esprit.services;
import com.google.zxing.WriterException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import tn.esprit.Interfaces.IFactureRService;
import tn.esprit.entities.FactureR;
import tn.esprit.entities.User;
import tn.esprit.repositories.FactureRRepository;

import javax.mail.MessagingException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Service
@Slf4j
public class FactureRService implements IFactureRService {
    @Autowired
    FactureRRepository factureRepository;



    public void updatePaymentStatus(long idFactureR) {
        FactureR factureR = factureRepository.findById(idFactureR).get();
        factureR.setStatusPaiementR(true);
        factureRepository.save(factureR);
    }

    public FactureR getFactureRById(long idFactureR) {
        return factureRepository.findById(idFactureR).get();
    }

    public List<FactureR> getAllfactures() {
        return (List<FactureR>)factureRepository.findAll();
    }

    public FactureR createFacture(FactureR factureR) {
        return factureRepository.save(factureR);
    }




}