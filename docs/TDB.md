## What is TBD?

In trunk-based development (TBD), developers always check into one branch, typically the master branch also called the “mainline” or “trunk”. You almost never create long-lived branches and as developer, check in as frequently as possible to the master — at least few times a day.

With everyone working out of the same branch, TBD increases visibility into what everyone is doing, increases collaboration and reduces duplicate effort.

The practice of checking in often means that merge conflicts if any are small and there is no reason to hold back on refactoring. Troubleshooting test failures or defects becomes easier when the change-set is small.

TBD also implies deploying code from the mainline to production – which means that your mainline must always be in a state that it can be released to production.

## TBD Best Practices

The Continuous Delivery book mentions several best practices (below) to adopt TBD around the principle of keeping the mainline version releasable at all times:

### 1. Small, incremental changes over big bang changes

Frequent small changes are less risky, easier to integrate with and easier to rollback. Use branch by abstraction(not to be confused with version control branching!) to make even large-scale changes incrementally.

### 2. Hide unfinished functionality with feature toggles

Hide features that aren’t finished yet from users. Feature toggles are an effective way to hide new features before you are confident about releasing them to users.

### 3. Comprehensive automated tests to give confidence

With a comprehensive automated test suite designed to give fast feedback, you have high confidence about the changes you are making. If you are always checking in small incremental changes, test failures are easy to fix.
