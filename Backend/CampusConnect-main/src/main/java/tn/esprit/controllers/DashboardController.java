package tn.esprit.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import tn.esprit.dataTransfer.response.AssignedResponse;
import tn.esprit.services.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin
@RequestMapping("/dashboard")
@RestController
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;
    @CrossOrigin("http://localhost:4200")
    @GetMapping("/Asigned-Chambers")
    public ResponseEntity<?> getChambersAndUsersAssigned() {

        List<AssignedResponse> responseList = dashboardService.getChambersAssigned();

        return ResponseEntity.ok(responseList);

    }

}
