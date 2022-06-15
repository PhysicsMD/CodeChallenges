//'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
//Count the number of word love in this sentence.
jsString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(jsString.toLowerCase().match(/love/g).length)

//Use match() to count the number of all because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
jsString = 'You cannot end a sentence with because because because is a conjunction'
console.log(jsString.match(/because/g).length)

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence_split = sentence.split('@')
sentence_merged = sentence_split.join('')
sentence_split = sentence_merged.split('%')
sentence_merged = sentence_split.join('')
sentence_split = sentence_merged.split('$')
sentence_merged = sentence_split.join('')
sentence_split = sentence_merged.split('&')
sentence_merged = sentence_split.join('')
sentence_split = sentence_merged.split('#')
sentence_merged = sentence_split.join('')
sentence_split = sentence_merged.split(';')
sentence_merged = sentence_split.join('')
console.log(sentence_merged)

//Calculate the total annual income of the person by extracting the numbers from the following text. 
//'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
text_array = text.split(' ')
console.log(parseInt(text_array[2]*12) + parseInt(text_array[8]) + parseInt(text_array[12]*12))
