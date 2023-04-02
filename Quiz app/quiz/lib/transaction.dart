class Transaction {
  late String title;
  late String id;
  late double amount;
  late DateTime date;

  Transaction(String id, String title, double amount, DateTime date) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
  }
}
