package eu.evgenysegeda.ebfserver.config;

import eu.evgenysegeda.ebfserver.exception.EntityNotFoundException;
import eu.evgenysegeda.ebfserver.exception.PermissionDeniedException;
import eu.evgenysegeda.ebfserver.web.dto.ResponseEnvelopeDTO;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(PermissionDeniedException.class)
    public ResponseEntity<Object> handlePermissionDeniedError(PermissionDeniedException ex) {
        ResponseEnvelope response = new ResponseEnvelopeDTO();
        response.setStatus(ResponseStatus.ERROR);
        if (ex.getMessage() == null) {
            response.setMessage("Permission Denied. Check your request.");
        } else {
            response.setMessage(ex.getMessage());
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<Object> handleEntityNotFoundException(EntityNotFoundException ex) {
        ResponseEnvelope response = new ResponseEnvelopeDTO();
        response.setStatus(ResponseStatus.ERROR);
        if (ex.getMessage() == null) {
            response.setMessage("Requested data not found. Check your request");
        } else {
            response.setMessage(ex.getMessage());
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleException(Exception ex) {
        ResponseEnvelope response = new ResponseEnvelopeDTO();
        response.setStatus(ResponseStatus.ERROR);
        response.setMessage(ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
