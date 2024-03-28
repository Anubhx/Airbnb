import 'package:flutter/material.dart';
import '../shared/theme/colors.dart';

class HomeScreen extends StatelessWidget{
  const HomeScreen({super,key});

   @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
  
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      appBar: AppBar(
        toolbarHeight:128 ,
        flexibleSpace: Container(
          child: Stack(
            children: [
              // const Positioned(
              //   bottom: 0.0,
              //   left: 0.0,
              //   right: 0.0,
              //   child: PropertyTypeList()
              //   ),

            ],
          ) ,
        ),
      ),
      body: Container(),
    );
  }
// time -- 7:18
}