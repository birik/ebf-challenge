package eu.evgenysegeda.ebfserver.config;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;


/**
 * Use when we want to send error or confirm that request done successfully
 */

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public abstract class ResponseEnvelope {

    private ResponseStatus status;
    private String message;

    public ResponseEnvelope() {

    }

    public ResponseEnvelope(ResponseStatus status) {
        this.status = status;
    }

    public ResponseStatus getStatus() {
        return status;
    }

    public void setStatus(ResponseStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

  }
