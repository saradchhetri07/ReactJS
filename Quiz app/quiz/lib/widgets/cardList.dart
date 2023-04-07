import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:intl/intl.dart';
import '../models/transaction.dart';

class cardList extends StatelessWidget {
  final List<Transaction> transactions;
  const cardList(this.transactions);

  @override
  Widget build(BuildContext context) {
    return Column(
        children: transactions.map((tx) {
      return Container(
        height: 80,
        child: Card(
          elevation: 10.0,
          color: Colors.indigo,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                margin:
                    const EdgeInsets.symmetric(vertical: 10, horizontal: 15),
                padding: EdgeInsets.symmetric(vertical: 5, horizontal: 10),
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.white, width: 2)),
                child: Center(
                    child: Text('\$${tx.amount.toString()}',
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold))),
              ),
              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Column(
                  children: [
                    Center(
                        child: Text(tx.title.toUpperCase(),
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold))),
                    Center(
                        child: Text((DateFormat.yMd().format(tx.date)),
                            style: const TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w200)))
                  ],
                ),
              )
            ],
          ),
        ),
      );
    }).toList());
  }
}
