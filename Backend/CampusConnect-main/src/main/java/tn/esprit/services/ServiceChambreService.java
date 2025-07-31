package tn.esprit.services;

import tn.esprit.Interfaces.IServiceChambreService;
import tn.esprit.entities.ServiceChambre;
import tn.esprit.repositories.ServiceChambreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ServiceChambreService implements IServiceChambreService {

    private final ServiceChambreRepository serviceChambreRepository;


    @Override
    public List<ServiceChambre> retrieveAllServiceChambres() {
        return serviceChambreRepository.findAll();
    }

    @Override
    public ServiceChambre addService(ServiceChambre serviceChambre) {
        return serviceChambreRepository.save(serviceChambre);
    }

    @Override
    public void deleteService(Long id) {
        serviceChambreRepository.deleteById(id);
    }

    @Override
    public ServiceChambre updateService(ServiceChambre serviceChambre) {
        return serviceChambreRepository.save(serviceChambre);
    }
}
