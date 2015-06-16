// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
	var bg = this.getAttribute('databg');
	var font = this.getAttribute('datafont');
  chrome.tabs.executeScript(null,
      {code:"[].map.call(document.querySelectorAll('*'),function(item){ item.style.backgroundColor='"+bg+"';item.style.color='"+font+"';});"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});