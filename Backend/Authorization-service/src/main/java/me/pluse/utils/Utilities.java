package me.pluse.utils;

import java.util.UUID;

public class Utilities {

    public static String generateId(String prefix_param, String format_param, int sequence) {
        return prefix_param + String.format(format_param, sequence);
    }

    public static boolean validString(String input) {
        return input!=null && !input.isEmpty();
    }


    public static boolean validLong(long input) {
        return input>0;
    }

    //  UUID is generated using a cryptographically strong pseudo random number generator
    public static String generateUuid() {
        return UUID.randomUUID().toString();
    }
}
