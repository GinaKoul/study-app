package com.study_app.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@Table(
    name = "cards",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = {"unit_id", "question"})
    }
)
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "unit_id", nullable = false)
    private Unit unit;

    @Column(length = 500, nullable = false)
    private String question;

    @Column(length = 1000, nullable = false)
    private String answer;

    public Card() {}

    public Card(Unit unit, String question, String answer) {
        this.unit = unit;
        this.question = question;
        this.answer = answer;
    }
}

