// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;


contract FebutopiaGovernance{


struct Proposal{

string title;

uint votes;

}


Proposal[] public proposals;



function createProposal(
string memory title
)
public{


proposals.push(

Proposal(
title,
0
)

);


}



function vote(
uint id
)
public{

proposals[id].votes++;

}



function totalProposals()
public
view
returns(uint)
{

return proposals.length;

}


}
