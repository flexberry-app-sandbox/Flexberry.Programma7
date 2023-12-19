package Programma_7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Programma_7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сенсоры
 */
@Entity(name = "IISProgramma_7Сенсоры")
@Table(schema = "public", name = "Сенсоры")
public class Sensory {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "IdДатчки")
    private Integer idдатчки;


    public Sensory() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public Integer getIdДатчки() {
      return idдатчки;
    }

    public void setIdДатчки(Integer idдатчки) {
      this.idдатчки = idдатчки;
    }


}