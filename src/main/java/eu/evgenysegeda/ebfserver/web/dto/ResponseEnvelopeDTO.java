package eu.evgenysegeda.ebfserver.web.dto;

import eu.evgenysegeda.ebfserver.config.ResponseEnvelope;
import eu.evgenysegeda.ebfserver.config.ResponseStatus;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;


/**
 * Use when we want to send error or confirm that request done successfully
 */

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class ResponseEnvelopeDTO extends ResponseEnvelope {

    public ResponseEnvelopeDTO() {
        super();
    }

    public ResponseEnvelopeDTO(ResponseStatus status) {
        super(status);
    }

}
