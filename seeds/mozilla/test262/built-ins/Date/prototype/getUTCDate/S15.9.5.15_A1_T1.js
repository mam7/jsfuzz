// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCDate" has { DontEnum } attributes
esid: sec-date.prototype.getutcdate
es5id: 15.9.5.15_A1_T1
description: Checking absence of ReadOnly attribute
---*/

var x = Date.prototype.getUTCDate;
if(x === 1)
  Date.prototype.getUTCDate = 2;
else
  Date.prototype.getUTCDate = 1;
if (Date.prototype.getUTCDate === x) {
  $ERROR('#1: The Date.prototype.getUTCDate has not the attribute ReadOnly');
}

reportCompare(0, 0);
