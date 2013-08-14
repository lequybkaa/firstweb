function search(fn){
	var keyword = fn.txtKeyword.value;
	if(keyword==""||keyword=="Search keywords"){
		window.alert('Nhập từ khóa tìm kiếm.');
		fn.txtKeyword.focus();
		fn.txtKeyword.value="";
	}
}

function p(fn){
	fn.txtKeyword.value = "Search keywords";
	fn.txtKeyword.style.color="#aafff";
}

function checkKeyword(fn, iEnter){
	if(iEnter){
		var keyword = fn.txtKeyword.value;
		if(keyword=="Search keywords"){
			fn.txtKeyword.value="";//KICK VAO O S THI MAT CHU SEARCH KEYWORDS
		}
	}else{
		var keyword = fn.txtKeyword.value;
		if(keyword==""){
			fn.txtKeyword.value = "Search keywords";//KO CO KI TU THI KICJ RA NGOAI SE HIEN LEN EARCH KEYWORD
		}
	}
}

function format(fn){
	var keyword = fn.txtKeyword.value;
	if(keyword!="Search keywords"){
		fn.txtKeyword.style.color=black;//VIET KI TU KHAC MA KICH RA NGOAI SE DOI MAU
	}else{
		fn.txtKeyword.style.color=black;//CON LAI LA MAU KHAC
	}
}