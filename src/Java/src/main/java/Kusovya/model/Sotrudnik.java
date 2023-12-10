package Kusovya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kusovya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISKusovyaСотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТабельныйНомер")
    private Integer табельныйномер;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "НомерПас")
    private Integer номерпас;

    @Column(name = "СерияПас")
    private Integer серияпас;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getТабельныйНомер() {
      return табельныйномер;
    }

    public void setТабельныйНомер(Integer табельныйномер) {
      this.табельныйномер = табельныйномер;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public Integer getНомерПас() {
      return номерпас;
    }

    public void setНомерПас(Integer номерпас) {
      this.номерпас = номерпас;
    }

    public Integer getСерияПас() {
      return серияпас;
    }

    public void setСерияПас(Integer серияпас) {
      this.серияпас = серияпас;
    }


}