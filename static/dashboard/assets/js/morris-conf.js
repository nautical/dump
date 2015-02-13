var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var overall_data = [
           {"period": "2014-10-2", "cutoff": 123, "top": 142, "personal" : 120},
           {"period": "2014-10-12", "cutoff": 126, "top": 143, "personal" : 124},
           {"period": "2014-10-29", "cutoff": 130, "top": 139, "personal" : 127},
           {"period": "2014-11-2", "cutoff": 134, "top": 145, "personal" : 130},
           {"period": "2014-11-10", "cutoff": 129, "top": 143, "personal" : 123},
           {"period": "2014-11-27", "cutoff": 131, "top": 144, "personal" : 140},
           {"period": "2014-12-3", "cutoff": 135, "top": 147, "personal" : 129},
           {"period": "2014-12-19", "cutoff": 134, "top": 143, "personal" : 134},
           {"period": "2015-01-10", "cutoff": 125, "top": 141, "personal" : 136}
      ];
      var quant_data = [
           {"period": "2014-10-2", "cutoff": 33, "top": 40, "personal" : 34},
           {"period": "2014-10-12", "cutoff": 36, "top": 44, "personal" : 24},
           {"period": "2014-10-29", "cutoff": 20, "top": 32, "personal" : 27},
           {"period": "2014-11-2", "cutoff": 14, "top": 20, "personal" : 20},
           {"period": "2014-11-10", "cutoff": 29, "top": 32, "personal" : 23},
           {"period": "2014-11-27", "cutoff": 21, "top": 29, "personal" : 10},
           {"period": "2014-12-3", "cutoff": 31, "top": 41, "personal" : 29},
           {"period": "2014-12-19", "cutoff": 44, "top": 49, "personal" : 34},
           {"period": "2015-01-10", "cutoff": 15, "top": 20, "personal" : 36}
      ];
      var reasoning_data = [
           {"period": "2014-10-2", "cutoff": 23, "top": 42, "personal" : 20},
           {"period": "2014-10-12", "cutoff": 26, "top": 43, "personal" : 24},
           {"period": "2014-10-29", "cutoff": 30, "top": 39, "personal" : 27},
           {"period": "2014-11-2", "cutoff": 34, "top": 45, "personal" : 30},
           {"period": "2014-11-10", "cutoff": 29, "top": 43, "personal" : 23},
           {"period": "2014-11-27", "cutoff": 31, "top": 44, "personal" : 40},
           {"period": "2014-12-3", "cutoff": 35, "top": 47, "personal" : 29},
           {"period": "2014-12-19", "cutoff": 34, "top": 43, "personal" : 34},
           {"period": "2015-01-10", "cutoff": 25, "top": 41, "personal" : 36}
      ];
      var eng_data = [
           {"period": "2014-10-2", "cutoff": 23, "top": 42, "personal" : 20},
           {"period": "2014-10-12", "cutoff": 26, "top": 43, "personal" : 24},
           {"period": "2014-10-29", "cutoff": 30, "top": 39, "personal" : 27},
           {"period": "2014-11-2", "cutoff": 34, "top": 45, "personal" : 30},
           {"period": "2014-11-10", "cutoff": 29, "top": 43, "personal" : 23},
           {"period": "2014-11-27", "cutoff": 31, "top": 44, "personal" : 40},
           {"period": "2014-12-3", "cutoff": 35, "top": 47, "personal" : 29},
           {"period": "2014-12-19", "cutoff": 34, "top": 43, "personal" : 34},
           {"period": "2015-01-10", "cutoff": 25, "top": 41, "personal" : 36}
      ];
      var cs_data = [
           {"period": "2014-10-2", "cutoff": 23, "top": 42, "personal" : 20},
           {"period": "2014-10-12", "cutoff": 26, "top": 43, "personal" : 24},
           {"period": "2014-10-29", "cutoff": 30, "top": 39, "personal" : 27},
           {"period": "2014-11-2", "cutoff": 34, "top": 45, "personal" : 30},
           {"period": "2014-11-10", "cutoff": 29, "top": 43, "personal" : 23},
           {"period": "2014-11-27", "cutoff": 31, "top": 44, "personal" : 40},
           {"period": "2014-12-3", "cutoff": 35, "top": 47, "personal" : 29},
           {"period": "2014-12-19", "cutoff": 34, "top": 43, "personal" : 34},
           {"period": "2015-01-10", "cutoff": 25, "top": 41, "personal" : 36}
      ];
      var ga_data = [
           {"period": "2014-10-2", "cutoff": 23, "top": 42, "personal" : 20},
           {"period": "2014-10-12", "cutoff": 26, "top": 43, "personal" : 24},
           {"period": "2014-10-29", "cutoff": 30, "top": 39, "personal" : 27},
           {"period": "2014-11-2", "cutoff": 34, "top": 45, "personal" : 30},
           {"period": "2014-11-10", "cutoff": 29, "top": 43, "personal" : 23},
           {"period": "2014-11-27", "cutoff": 31, "top": 44, "personal" : 40},
           {"period": "2014-12-3", "cutoff": 35, "top": 47, "personal" : 29},
           {"period": "2014-12-19", "cutoff": 34, "top": 43, "personal" : 34},
           {"period": "2015-01-10", "cutoff": 25, "top": 41, "personal" : 36}
      ];
      
      Morris.Line({
        element: 'hero-overall',
        data: overall_data,
        xkey: 'period',
        ykeys: ['cutoff', 'top' , 'personal'],
        labels: ['Cut Off', 'Top Score' , 'Your Score'],
        lineColors:['#4ECDC4','#ed5565','#644BDB']
      });
      
      Morris.Line({
        element: 'hero-quant',
        data: quant_data,
        xkey: 'period',
        ykeys: ['cutoff', 'top' , 'personal'],
        labels: ['Cut Off', 'Top Score' , 'Your Score'],
        lineColors:['#4ECDC4','#ed5565','#644BDB']
      });

      Morris.Line({
              element: 'hero-reasoning',
              data: reasoning_data,
              xkey: 'period',
              ykeys: ['cutoff', 'top' , 'personal'],
              labels: ['Cut Off', 'Top Score' , 'Your Score'],
              lineColors:['#4ECDC4','#ed5565','#644BDB']
            });

      Morris.Line({
              element: 'hero-eng',
              data: eng_data,
              xkey: 'period',
              ykeys: ['cutoff', 'top' , 'personal'],
              labels: ['Cut Off', 'Top Score' , 'Your Score'],
              lineColors:['#4ECDC4','#ed5565','#644BDB']
            });

      Morris.Line({
              element: 'hero-cs',
              data: cs_data,
              xkey: 'period',
              ykeys: ['cutoff', 'top' , 'personal'],
              labels: ['Cut Off', 'Top Score' , 'Your Score'],
              lineColors:['#4ECDC4','#ed5565','#644BDB']
            });

      Morris.Line({
              element: 'hero-ga',
              data: ga_data,
              xkey: 'period',
              ykeys: ['cutoff', 'top' , 'personal'],
              labels: ['Cut Off', 'Top Score' , 'Your Score'],
              lineColors:['#4ECDC4','#ed5565','#644BDB']
            });


      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




