// دالة مخصصة للفلترة باستخدام الـ loop والـ if
function customFilter(postsArray) {
  const result = [];
  
  for (let i = 0; i < postsArray.length; i++) {
    // الشرط: إذا كان عدد حروف الـ title أقل من 25
    if (postsArray[i].title.length < 25) {
      result.push(postsArray[i]); // أضف البوست للمصفوفة الجديدة
    }
  }
  
  return result;
}

// تصدير الدالة لتستخدم في ملفات أخرى
export { customFilter };
