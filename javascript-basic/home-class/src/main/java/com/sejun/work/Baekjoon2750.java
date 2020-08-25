package com.sejun.work;

import java.util.Scanner;



public class Main {

	public static void main(String[] args) {



		Scanner sc = new Scanner(System.in);

		int n= sc.nextInt();

		int[] data = new int[n];

		int temp;

		

		for(int a=0; a<data.length; a++){

			data[a] = sc.nextInt();

		}



		for (int i = data.length; i > 0; i--) {

			for (int j = 0; j < i - 1; j++) {

				if (data[j] > data[j + 1]) {

					temp = data[j];

					data[j] = data[j + 1];

					data[j + 1] = temp;

				}

			}

		}

		for (int k = 0; k < data.length; k++) {

			System.out.println(data[k]);

		}

		sc.close();

	}

}