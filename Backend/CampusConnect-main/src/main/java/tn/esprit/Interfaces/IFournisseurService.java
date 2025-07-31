package tn.esprit.Interfaces;

import org.springframework.http.ResponseEntity;
import tn.esprit.entities.Fournisseur;

import java.util.List;

public interface IFournisseurService {


    List<Fournisseur> ListFournisseurs();

    Fournisseur ajouterFournisseur(Fournisseur fourn);

    void supprimerFournisseur(Integer idFourn);

    void updateFournisseur(Fournisseur fournisseur, Integer idFourn);


    ResponseEntity<Fournisseur> getFournisseurById(Integer idFourn);
}
