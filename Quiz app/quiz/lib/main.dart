import 'package:flutter/material.dart';
import './transaction.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.grey,
      ),
      home: const MyHomePage(title: 'Quiz'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<Transaction> transactions = [
    Transaction('t1', 'new shoe', 99, DateTime.now()),
    Transaction('t2', 'new car', 50, DateTime.now()),
    Transaction('t3', 'new bag', 500, DateTime.now()),
    Transaction('t4', 'new board', 60, DateTime.now()),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Card(
              elevation: 10.0,
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Container(
                  child: Column(children: [
                    TextField(
                      decoration: InputDecoration(labelText: 'Title'),
                    ),
                    TextField(
                      decoration: InputDecoration(labelText: 'amount'),
                    ),
                    TextButton(
                        onPressed: () {},
                        child: Text("add amount",
                            style: TextStyle(color: Colors.purple)))
                  ]),
                ),
              ),
            ),
            Column(
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
                        margin: const EdgeInsets.symmetric(
                            vertical: 10, horizontal: 15),
                        padding:
                            EdgeInsets.symmetric(vertical: 5, horizontal: 10),
                        decoration: BoxDecoration(
                            border: Border.all(color: Colors.white, width: 2)),
                        child: Center(
                            child: Text('\$${tx.amount.toString()}',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold))),
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
            }).toList())
          ],
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
