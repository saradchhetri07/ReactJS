import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:quiz/widgets/cardList.dart';
import 'package:quiz/widgets/userForm.dart';
import '../models/transaction.dart';
import 'package:intl/intl.dart';

class userTransaction extends StatefulWidget {
  const userTransaction({Key? key}) : super(key: key);

  @override
  State<userTransaction> createState() => _userTransactionState();
}

class _userTransactionState extends State<userTransaction> {
  final List<Transaction> _userTransactions = [
    Transaction('t1', 'new shoe', 99.12, DateTime.now()),
    Transaction('t2', 'new car', 50.22, DateTime.now()),
    Transaction('t3', 'new bag', 500.23, DateTime.now()),
    Transaction('t4', 'new board', 60.82, DateTime.now()),
  ];
  void _addTransaction(String title, double amount) {
    final newTx =
        Transaction(DateTime.now().toString(), title, amount, DateTime.now());
    print("came here");
    setState(() {
      _userTransactions.add(newTx);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      children: <Widget>[
        userForm(_addTransaction),
        cardList(_userTransactions)
      ],
    );
  }
}
