# Contributing

## Duplicated code

At some point, the code could be duplicated.  
If you encounter this situation, you should help developers to identify the corresponding code in case there is an edit.  
Also, if someone want to refactor, it will help to identify the corresponding duplicated code.

When some code is duplicated, you must tag them with multiple line comments and create a new duplicate rule.

The original duplicated code should be tag as follow:

```
/**
 * @Duplicated[rule] origin
 */
```

The duplicated code should be tag as follow:

```
/**
 * @Duplicated[rule] reason
 */
``` 

**Rule:**

Is an incremented rule with 3 digits as `XXX`.  
When adding a new rule, you must add the rule in the list of rules below.  
The rule added should be formatted as `- rule: location`

**Reason:**

Is an explanation of why you must duplicate your code.   

### Rules

- none

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  
This leads to **more readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.  
The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>       
<BLANK LINE> 
<footer>     
```

The **type** and the **subject** is mandatory and the other stuff is optional.

Any line of the commit message cannot be longer 100 characters!  
This allows the message to be easier to read on GitHub as well as in various git tools.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of
the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is
the SHA of the commit being reverted.

### Type

Must be one of the following:

* **feat**    : A new feature
* **fix**     : A bug fix
* **docs**    : Documentation only changes
* **style**   : Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) [PBI #109733]
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**    : A code change that improves performance
* **test**    : Adding missing tests or correcting existing tests
* **build**   : Changes that affect the build system, CI configuration or external dependencies (example scopes: gulp, broccoli, npm)
* **chore**   : Other changes that don't modify `src` or `test` files [PBI #109727]

### Scope

The scope could be anything specifying place of the commit change. For example
`datepicker`, `dialog`, `app`, etc.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".  
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.  
The rest of the commit message is then used for this.
