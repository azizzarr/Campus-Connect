package tn.esprit.Interfaces;

import tn.esprit.entities.ServiceChambre;

import java.util.List;

public interface IServiceChambreService {

    List<ServiceChambre> retrieveAllServiceChambres();

    ServiceChambre addService(ServiceChambre serviceChambre);

    void deleteService(Long id);

    ServiceChambre updateService(ServiceChambre serviceChambre);
}
