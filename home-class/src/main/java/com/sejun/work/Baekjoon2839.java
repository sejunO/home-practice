package com.sejun.work;

import java.util.Scanner;

public class Baekjoon2839 {

	public static void main(String[] args) {
		int input;
	    
	    int a = 0;
	    int b = 0;
	    int c = 0;
	    int d = 0;
	    
	    int result5 = 0;
	    int result3 = 0;
	    
	    Scanner sc = new Scanner(System.in);
	    input = sc.nextInt();
	    
	    a = input / 5;    
	    if(input <5 ) {
	        if(input == 3) {
	            System.out.println(1);
	            return;
	        }else {
	            System.out.println(-1);
	            return;
	        }
	    }
	    
	    for(int i = a; i >= 1;  i--) {
	        b = 5 * i;
	        c = input - b;
	        d = c % 3;
	        
	        if (d == 0) {
	            result5 = i;
	            result3 = c/3;
	            break;
	        }
	    }
	    if(d != 0) {
	        if(input % 3 == 0) {
	            System.out.println(input/3);
	        }else {
	            System.out.println(-1);
	        }
	    }else {
	        System.out.println(result5 + result3);
	    }
	}
}


