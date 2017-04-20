Miscellaneous useful functions *in one place*.

### Arrays

```
count(a, f)
```

Count how many elements of an array satisfy a predicate.

### Functional maps

```
val = get(m, key)
```

Get a value. If not present, returns the false value supplied initially for this map.

```
m = put(m, key, val)
```

Put a new key-value pair in a map, returning the new map while leaving the old one unchanged. Any existing value for that key will be overridden. Represent an empty map with any false value. Keys don't need to be ordered, just comparable by strict equality.

### ctype

```
isalnum(c)
isalpha(c)
isdigit(c)
islower(c)
isspace(c)
isupper(c)
```

As the C equivalents.

### print

```
print(a)
```

Print a value with useful settings, including full expansion of nested objects to any depth, arrays to any length, and color coding that turns off when stdout is redirected.
