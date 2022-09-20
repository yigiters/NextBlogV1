var btn = document.getElementById("submit");
btn.onclick = function () {

    if(tdd.value == "" || ccm.value == "" || cbg.value == "" || tbg.value == "") {
        alert("Form içindeki bütün alanları doldurun!");
    } else {
    
    var data_tdd = tdd.value;
    var data_ccm = ccm.value;
    var data_cbg = cbg.value;
    var data_tbg = tbg.value;

    var cir = 450 / data_tdd;
    var mib = data_ccm / cir;
    var isf = 1700 / data_tdd;
    var cd = (data_cbg - data_tbg) / isf;
    var ri = (mib + (cd));

    document.getElementById("result_cir").value = cir.toFixed(2);
    document.getElementById("result_isf").value = isf.toFixed(2);
    document.getElementById("result_ri").value = ri.toFixed(2) + " Ünite";
    document.getElementById("result_cd").value = cd.toFixed(2) + " Ünite";
    document.getElementById("result_tid").value = mib.toFixed(2) + " Ünite";
    document.getElementById('info').innerHTML = "<b>1 ünite </b> insülin <b>"+ cir.toFixed(2) +" gram</b> karbonhidrat karşılamaktadır ve <b> 1 ünite </b> ünite insülün kan şekerini <b>" + isf.toFixed(2) + " mg/dL </b> düşürmektedir."
    }

}