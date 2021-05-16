function saveThePrisoner(n, m, s) {
  // Write your code here
  if ((m - 1 + s) % n !== 0) return (m - 1 + s) % n;
  return n;

  ////////////////////////////////////////// my solution
  // if (m>n) {m = m%n;}
  // if(m==0) return s-1;
  // if ((m-s) > (n-s)) {
  //     m=m-(n-s-1);
  //     return m;
  // } else return m+s-1;
}
//// testcases solution
// https://hr-testcases-us-east-1.s3.amazonaws.com/13489/input01.txt?AWSAccessKeyId=AKIAR6O7GJNX5DNFO3PV&Expires=1621017698&Signature=vLai8ZhxilONgWlIcaUeqCRpaeY%3D&response-content-type=text%2Fplain

////////// testcases

// https://hr-testcases-us-east-1.s3.amazonaws.com/13489/input01.txt?AWSAccessKeyId=AKIAR6O7GJNX5DNFO3PV&Expires=1621017698&Signature=vLai8ZhxilONgWlIcaUeqCRpaeY%3D&response-content-type=text%2Fplain
