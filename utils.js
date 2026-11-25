// 1. دالة مخصصة للفلترة (الموجودة مسبقاً)
function customFilter(postsArray) {
  const result = [];
  
  for (let i = 0; i < postsArray.length; i++) {
    if (postsArray[i].title.length < 25) {
      result.push(postsArray[i]);
    }
  }
  
  return result;
}

// 2. دالة مخصصة للـ map باستخدام loop
function customMap(array, callback) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  
  return result;
}

// 3. دالة مخصصة للـ reduce باستخدام loop
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // في حال لم يتم تمرير قيمة ابتدائية، نبدأ من العنصر الأول
  if (accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

// تصدير جميع الدوال لتستخدم في ملفات أخرى
export { customFilter, customMap, customReduce };
