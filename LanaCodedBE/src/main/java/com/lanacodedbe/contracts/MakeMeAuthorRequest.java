package com.lanacodedbe.contracts;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MakeMeAuthorRequest {
    private int[] blogIds;
    private String author;
}
