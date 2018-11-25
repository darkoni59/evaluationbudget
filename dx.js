// Array

var TabSpend = [];
var TabRevenue = [];
var TabSavings = [];


// your Spend of mounth

document.getElementById('SubmitSpend').addEventListener("click",


    function () {


        var SpendType = document.getElementById('SpendType').value;
        var SpendAmount = document.getElementById('SpendAmount').value * 1;


        var loyerType = document.getElementById('loyer').innerHTML;
        var loyerAmount = document.getElementById('loyerAmount').value * 1;
        document.getElementById('summloyer').innerHTML = loyerType + ' : ' + loyerAmount + '<br>';


        var eauType = document.getElementById('eau').innerHTML;
        var eauAmount = document.getElementById('eauAmount').value * 1;
        document.getElementById('summEau').innerHTML = eauType + ' : ' + eauAmount + '<br>';


        var internetType = document.getElementById('internet').innerHTML;
        var internetAmount = document.getElementById('internetAmount').value * 1;
        document.getElementById('summInternet').innerHTML = internetType + ':' + internetAmount + '<br>';


        var courseType = document.getElementById('course').innerHTML;
        var courseAmount = document.getElementById('courseAmount').value * 4;
        document.getElementById('summCourse').innerHTML = courseType + ":" + courseAmount + '<br>';


        var essenceType = document.getElementById('essence').innerHTML;
        var essenceAmount = document.getElementById('essenceAmount').value * 4;
        document.getElementById('summEssence').innerHTML = essenceType + ":" + essenceAmount + '<br>';


        var sportType = document.getElementById('sport').innerHTML;
        var sportAmount = document.getElementById('sportAmount').value / 12;
        document.getElementById('summSport').innerHTML = sportType + ":" + sportAmount + '<br>';


        var sortiesType = document.getElementById('sorties').innerHTML;
        var sortiesAmount = document.getElementById('sortiesAmount').value * 4;
        document.getElementById('summSorties').innerHTML = sortiesType + ":" + sortiesAmount + '<br>';


        var spendautreType = document.getElementById('spendautre').innerHTML;
        var spendautreAmount = document.getElementById('spendautreAmount').value * 1;
        document.getElementById('summSpendAutre').innerHTML = spendautreType + ":" + spendautreAmount + '<br>';


        TabSpend.push(SpendAmount, loyerAmount, eauAmount, internetAmount, courseAmount, essenceAmount, sportAmount, sortiesAmount, spendautreAmount);

        document.getElementById('SummSpend').innerHTML += SpendType + ' : ' + SpendAmount + '<br>';

        var totalD = 0;
        for (var i = 0; i < TabSpend.length; i++) {
            totalD += parseFloat(TabSpend[i]);
        }

        document.getElementById('TotalSpend').innerHTML = totalD;


    });


// your help,gain , rente

document.getElementById('SubmitRecette').addEventListener("click",

    function () {

        var RevenueType = document.getElementById('RevenueType').value;
        var RevenueAmount = document.getElementById('RevenueAmount').value * 1;
        var salaireType = document.getElementById('salaire').innerHTML;
        var salaireAmount = document.getElementById('salaireAmount').value * 1;
        document.getElementById('summSalaire').innerHTML = salaireType + ":" + salaireAmount + '<br>';


        var aideType = document.getElementById('aide').innerHTML;
        var aideAmount = document.getElementById('aideAmount').value * 1;
        document.getElementById('summAide').innerHTML = aideType + ":" + aideAmount + '<br>';


        var renteType = document.getElementById('rente').innerHTML;
        var renteAmount = document.getElementById('renteAmount').value * 1;
        document.getElementById('summRente').innerHTML = renteType + ":" + renteAmount + '<br>';


        var autreType = document.getElementById('autre').innerHTML;
        var autreAmount = document.getElementById('autreAmount').value * 1;
        document.getElementById('summAutre').innerHTML = autreType + ":" + autreAmount + '<br>';



        TabRevenue.push(RevenueAmount, salaireAmount, aideAmount, renteAmount, autreAmount);

        document.getElementById('SummRevenue').innerHTML += RevenueType + ' : ' + RevenueAmount + '<br>';

        var totalR = 0;
        for (var i = 0; i < TabRevenue.length; i++) {
            totalR += parseFloat(TabRevenue[i]);
        }

        document.getElementById('TotalRevenue').innerHTML = totalR;

    });


// for your money save or staying

document.getElementById('SubmitEpargne').addEventListener("click",

    function () {

        var SavingAmount = document.getElementById('SavingAmount').value * 1;


        TabSavings.push(SavingAmount);

        document.getElementById('SummSaving').innerHTML += SavingAmount + '<br>';


        var totalE = 0;
        for (var i = 0; i < TabSavings.length; i++) {
            totalE += parseFloat(TabSavings[i]);
        }

        document.getElementById('TotalSaving').innerHTML = totalE;


    });


// TOTAL

document.getElementById('SubmitTotal').addEventListener("click",

    function () {

        var totalE = 0;
        for (var i = 0; i < TabSavings.length; i++) {
            totalE += parseFloat(TabSavings[i]);
        }

        var totalR = 0;
        for (var i = 0; i < TabRevenue.length; i++) {
            totalR += parseFloat(TabRevenue[i]);
        }

        var totalD = 0;
        for (var i = 0; i < TabSpend.length; i++) {
            totalD += parseFloat(TabSpend[i]);
        }

        bilan = totalE + totalR - totalD;
        document.getElementById('TotalResult').innerHTML = bilan;

        if (bilan < 0) {
            document.getElementById('TotalResult').style.color = 'red';
            alert('Bilan Negatif');
        }
        if (bilan > 0) {
            document.getElementById('TotalResult').style.color = 'blue';
            alert("Bilan Positif");
        }

        if (bilan == 0) {
            document.getElementById('TotalResult').style.color = 'white';
            alert("Bilan Neutre");
        }



    });


// is a button for reset

document.getElementById('RESET').addEventListener("click",


    function resetFields() {

        document.getElementById('SpendAmount').value = "";

        document.getElementById('SpendType').value = "";

        document.getElementById('loyerAmount').value = "";

        document.getElementById('eauAmount').value = "";

        document.getElementById('internetAmount').value = "";

        document.getElementById('courseAmount').value = "";

        document.getElementById('essenceAmount').value = "";

        document.getElementById('sportAmount').value = "";

        document.getElementById('sortiesAmount').value = "";

        document.getElementById('spendautreAmount').value = "";

        document.getElementById('RevenueAmount').value = "";

        document.getElementById('salaireAmount').value = "";

        document.getElementById('aideAmount').value = "";

        document.getElementById('renteAmount').value = "";

        document.getElementById('autreAmount').value = "";

        document.getElementById('SavingAmount').value = "";

        document.getElementById('RevenueType').value = "";


        TabSpend = [];

        TabRevenue = [];

        TabSavings = [];
console.log();
    }
);

// valor of editor you send the valor you want to add

document.getElementById('EDITER').addEventListener("click",

    function modifier() {

        TabSpend = [];

        TabRevenue = [];

        TabSavings = [];

    });