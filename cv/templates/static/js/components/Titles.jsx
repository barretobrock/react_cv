import React from 'react';


const Heading = ({lvl, classTxt, txt}) => {
    const Tag = 'h' + lvl;
    return (
        <Tag className={classTxt}>{txt}</Tag>
    )
};

const PageHeading = ({text}) => {
    return (
        <Heading lvl={'2'} classTxt={'major'} txt={text} />
    )
};

const MajorSectionHeading = ({text}) => {
    return (
        <Heading lvl={'2'} classTxt={'section-title'} txt={text} />
    )
};

const MinorSectionHeading = ({text}) => {
    return (
        <Heading lvl={'3'} classTxt={'section-title'} txt={text} />
    )
};

const MinorTitle = ({text}) => {
    return (
        <Heading lvl={'3'} classTxt={'minor'} txt={text} />
    )
};

const JobTitle = ({text}) => {
    return (
        <Heading lvl={'3'} classTxt={'jobtitle'} txt={text} />
    )
};

const SpanTitle = ({text}) => {
    return (
        <span className={'span-title'}>{text}</span>
    )
};

export {
    PageHeading,
    MajorSectionHeading,
    MinorSectionHeading,
    MinorTitle,
    JobTitle,
    SpanTitle
};
