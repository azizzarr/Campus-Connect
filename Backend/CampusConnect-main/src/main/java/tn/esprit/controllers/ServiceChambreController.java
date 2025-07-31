package tn.esprit.controllers;


import tn.esprit.entities.Chambre;
import tn.esprit.entities.ServiceChambre;
import tn.esprit.Interfaces.IServiceChambreService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/service")
public class ServiceChambreController {


    private final IServiceChambreService serviceChambreService;

    @PostMapping("/add-service")
     ServiceChambre addService(@RequestBody ServiceChambre serviceChambre) {
        return serviceChambreService.addService(serviceChambre);
    }

    @DeleteMapping("/delete-service")
     void deleteService(@PathVariable("chambre-id") Long serviceId) {
        serviceChambreService.deleteService(serviceId);
    }
    @PutMapping("/modify-service")
     ServiceChambre updateService(ServiceChambre serviceChambre)
    {
        return serviceChambreService.updateService(serviceChambre);
    }

    @GetMapping("/retrieve-all-services")
    public List<ServiceChambre> getServices() {
        List<ServiceChambre> listServices = serviceChambreService.retrieveAllServiceChambres();
        return listServices;
    }

}
