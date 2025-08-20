package com.study_app.backend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
    name = "units",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = {"subject_id", "title"})
    }
)
public class Unit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @Column(length = 150, nullable = false)
    private String title;

    @Column(length = 500, nullable = true)
    private String description;

    @Column(length = 12000, nullable = true)
    private String content;

    @OneToMany(
        mappedBy = "unit",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private List<Card> cards = new ArrayList<>();

    public Unit() {}

    public Unit(Subject subject, String title, String description, String content, List<Card> cards) {
        this.subject = subject;
        this.title = title;
        this.description = description;
        this.content = content;
        this.cards = cards;
    }
}
