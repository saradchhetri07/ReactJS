import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:quiz/models/transaction.dart';

class userForm extends StatelessWidget {
  final Function addTx;
  userForm(this.addTx);

  final titleController = TextEditingController();
  final amountController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 10.0,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Container(
          child: Column(children: [
            TextField(
              controller: titleController,
              decoration: InputDecoration(labelText: 'Title'),
            ),
            TextField(
              decoration: InputDecoration(labelText: 'amount'),
              controller: amountController,
            ),
            TextButton(
                onPressed: () {
                  print(titleController.text);

                  addTx(titleController.text,
                      double.parse(amountController.text));
                  titleController.text = "";
                  amountController.text = "";
                },
                child:
                    Text("add amount", style: TextStyle(color: Colors.purple)))
          ]),
        ),
      ),
    );
    ;
  }
}
