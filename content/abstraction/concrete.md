## History
It’s hard to nail down "the beginning" for our purposes. Computational machines have been around for a very long time. The first electrical computing machines used mechanical relays and switches to solve specific math problems. These were single-purpose computers used to calculate torpedo or bomb trajectories, or decrypt communications.

The ENIAC was among the first general purpose computers built. Instructions were given to the computer by setting up a mess of switches and cables, allowing the computer to work out many different problems. The configuration of cables and switches constituted the "program", and could be changed as necessary.

The ENIAC was a lot of work to program and reprogram. Naturally, a general purpose computer is more useful if it can more easily be reconfigured to calculate different problems. The first stored-program digital computer was the Manchester Small-Scale Experimental Machine (SSEM), which ran its first program on 21 June 1948. Instead of a series of physical connections representing a program, the machine’s configuration was loaded into digital memory. When execution started, the SSEM would begin reading and executing instructions at the beginning of its digital memory. The SSEM really knew how to do only eight things, its only mathematical abilities being subtraction and negation. Every SSEM program was a combination of these eight instructions. This was the beginning of software.

> Write down the steps you would take to add two numbers using only subtraction and negation.
>
> That series of steps is a program, and perhaps one of the first ever
> software abstractions.
>
> Since the SSEM itself had no notion of "addition", the concept had to be
> broken down and expressed in the more concrete operations of subtraction
> and negation.
>
> That's really all that programming is.
>
> Extra credit: write down a program that does division using only
> subtraction and negation

## Assembly

Subsequent computers featured expanded instruction sets and better speed. That was good, but programs still needed to be written as a sequence of 1's and 0's, which are pretty hard to read, write, and reason about. To make this easier, tools were developed which allowed to be designed using short codes for processor instructions, which then were translated into the binary required by the computer. Programs written this way are said to be written in "assembly". Assembly programs translated by an "assembler" into the binary which can be loaded into RAM and executed.

> Assembly is the most basic of a set of abstractions which bridge the gap
> between the computers and the humans. The concrete layer (the processor) still
> works the same, but the abstraction above it (Assembly) makes it easier
> to think about it.
>
> [This page shows the assembly code](http://6502.org/source/games/uchess/uchess.htm)
> of a chess game written for the MOS 6502
> processor. The legendary MOS 6502 powered the Apple II, original Nintendo, and
> a good many other notable products. You'll notice that assembly is still pretty
> hard to read, and as a bridge between man and machine doesn't go very far.
> That's because assembly doesn't do much besides map (somewhat) human readable
> names to a processor's instructions. In other words, SSEM assembly still
> wouldn't help you much with addition.
>
> You might think that assembly program is a lost art these days, but it is
> still very much alive, being used in embedded systems and by performance nuts
> who want to squeeze the very last drop of power from their processors.


Eventually, computer programs could be saved to a persistent medium, like a punch-card or magnetic tape, and a user wouldn't have to re-enter the program every time. This also allowed programs to be copied and shared, opening computer technology up to a new set of users - ones who didn't know how to program.

## Programming Languages
A programming language is a language designed to communicate instructions to some kind of processing machine. The machine has an inherent set of concrete capabilities, and the programming language is a tool that surfaces those capabilities to a programmer. Assembly is a programming language in this sense, exposing a processor's instructions to programmers.

As computers progressed, many types of machines were developed. Few machines had much, if anything, in common with others, so an assembly program written for one couldn't run on another. Moreover, to be suitable for commercial use, the computer had to be programmable by a business person without a computer science degree.

Programming languages were developed to solve both of these problems.

Imagine you have two processors, each with a different instruction code (or opcode) for addition. Both processors know how to add, but each does it differently. You want to write a program that runs on both machines. You basically have two options:
1. Write the program twice, concretely, using each processor’s own instructions.
2. Write the program once in a language not specific to either of the processor’s instruction sets (an abstraction). Then, write another program that translates your abstract program into the concrete instructions need by each processor.
