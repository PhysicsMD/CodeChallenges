// Find a union b
console.log(new Set([...a,...b]))

// Find a intersection b
console.log(new Set(a.filter(num => (new Set(b)).has(num))))

// Find a without b
console.log(new Set(a.filter(num => !(new Set(b)).has(num))))
